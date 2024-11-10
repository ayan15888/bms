'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Upload, Plus } from 'lucide-react'

export default function ListBookPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Add New Book</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] bg-muted flex flex-col items-center justify-center rounded-md overflow-hidden mb-6 border-2 border-dashed border-gray-300">
                {imagePreview ? (
                  <img src={imagePreview} alt="Book cover preview" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <span className="text-muted-foreground mb-2">No image</span>
                    <span className="text-sm text-muted-foreground">Drag and drop</span>
                  </>
                )}
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="bookName">Book Name</Label>
                  <Input id="bookName" placeholder="Enter book name" />
                </div>
                <div>
                  <Label htmlFor="authorName">Author Name</Label>
                  <Input id="authorName" placeholder="Enter author name" />
                </div>
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" type="number" placeholder="Enter book price" min="0" step="0.01" />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter book description" rows={5} />
                </div>
              </form>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <Button className="w-full" variant="outline">
              <Plus className="mr-2 h-4 w-4" /> Gallery Image
            </Button>
            <div className="flex">
              <div className="w-full md:w-1/3 pr-4">
                <Input
                  id="bookImage"
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                  accept="image/*"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => document.getElementById('bookImage')?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" /> Upload Image
                </Button>
              </div>
              <div className="w-full md:w-2/3 flex gap-4">
                <Button variant="outline" className="flex-1">Cancel</Button>
                <Button type="submit" className="flex-1">List Book</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}