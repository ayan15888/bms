'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, BookOpen, DollarSign, Users, Info } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Button 
        variant="ghost" 
        onClick={() => router.back()} 
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8">About Student Book Exchange</h1>
      
      {/* Intro Alert */}
      <Alert className="mb-8">
        <Info className="h-4 w-4" />
        <AlertTitle>Welcome to Student Book Exchange!</AlertTitle>
        <AlertDescription>
          We're on a mission to make education more affordable by connecting students who want to buy and sell used textbooks.
        </AlertDescription>
      </Alert>

      {/* Tabs Section */}
      <Tabs defaultValue="about" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="about">About Us</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
        </TabsList>
        
        {/* About Us Tab */}
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
              <CardDescription>Learn about Student Book Exchange</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Student Book Exchange was founded by a group of college students who were frustrated with the high cost of textbooks. 
                We created this platform to help students save money and make education more accessible for everyone.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Benefits Tab */}
        <TabsContent value="benefits">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="mr-2 h-6 w-6 text-primary" />
                  Save Money
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Buy used books at a fraction of the cost of new ones, and sell your old books to recoup some of your expenses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-6 w-6 text-primary" />
                  Connect with Peers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Engage with fellow students from your campus or nearby institutions, fostering a community of learners.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-6 w-6 text-primary" />
                  Wide Selection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Find textbooks for various courses and subjects, all in one place, making it easy to get the materials you need.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* How It Works Tab */}
        <TabsContent value="how-it-works">
          <Card>
            <CardHeader>
              <CardTitle>How Student Book Exchange Works</CardTitle>
              <CardDescription>Follow these simple steps to start saving on textbooks</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="step-1">
                  <AccordionTrigger>1. Create an account</AccordionTrigger>
                  <AccordionContent>
                    Sign up for a free account on our platform. You'll need to provide some basic information to get started.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step-2">
                  <AccordionTrigger>2. Browse or post listings</AccordionTrigger>
                  <AccordionContent>
                    Search for the books you need or list your old textbooks for sale. Our easy-to-use interface makes it simple to find what you're looking for.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step-3">
                  <AccordionTrigger>3. Connect with buyers or sellers</AccordionTrigger>
                  <AccordionContent>
                    Use our built-in messaging system to communicate with other students about book conditions, prices, and meeting arrangements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step-4">
                  <AccordionTrigger>4. Exchange books and payment</AccordionTrigger>
                  <AccordionContent>
                    Meet in a safe, public place to complete the transaction. Always prioritize your safety when meeting with others.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step-5">
                  <AccordionTrigger>5. Leave feedback</AccordionTrigger>
                  <AccordionContent>
                    After the transaction, leave feedback for the other party. This helps build trust in our community and improves the experience for everyone.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to start saving?</h2>
        <Button asChild size="lg">
          <Link href="/register">Join Student Book Exchange</Link>
        </Button>
      </div>
    </div>
  )
}
