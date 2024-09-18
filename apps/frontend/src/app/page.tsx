import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Utensils, Clock, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Utensils className="h-6 w-6 mr-2" />
          <span className="font-bold">DishDash</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Choose your pizza in seconds, not in hours
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover and order from the best local restaurants with ease.
                  Your perfect meal is just a tap away.
                </p>
              </div>
              {/* <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your location"
                    type="text"
                  />
                  <Button type="submit">Search</Button>
                </form>
              </div> */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <Link href="/restaurants">
                  <Card>
                    <CardContent className="flex flex-col items-center space-y-4 p-6">
                      <Utensils className="h-12 w-12 text-primary" />
                      <h3 className="text-2xl font-bold text-center">
                        Restaurants
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-center">
                        Explore a wide variety of local restaurants in your
                        area.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/dishes">
                  <Card>
                    <CardContent className="flex flex-col items-center space-y-4 p-6">
                      <Search className="h-12 w-12 text-primary" />
                      <h3 className="text-2xl font-bold text-center">Dishes</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-center">
                        Find and compare dishes from different restaurants.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Search className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">
                    Quick Search
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Find restaurants and dishes instantly with our powerful
                    search engine.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Utensils className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">
                    Extensive Menu Database
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Browse through detailed menus from a wide variety of
                    restaurants.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Clock className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold text-center">
                    Real-time Updates
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Get the latest information on dish availability and wait
                    times.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Search</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Enter your location or cuisine preference
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Browse</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Explore menus and read reviews
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Order</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Choose your dishes and place your order
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Star className="h-12 w-12 text-yellow-400" />
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    &ldquo;This app has revolutionized how I order food. So
                    quick and easy!&rdquo;
                  </p>
                  <p className="font-semibold">- Sarah M.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Star className="h-12 w-12 text-yellow-400" />
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    &ldquo;I love being able to compare menus from different
                    restaurants so easily.&rdquo;
                  </p>
                  <p className="font-semibold">- John D.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Star className="h-12 w-12 text-yellow-400" />
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    &ldquo;The real-time updates on wait times have saved me so
                    much time!&rdquo;
                  </p>
                  <p className="font-semibold">- Emily R.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to start ordering smarter?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Download our app now and experience the future of food
                  ordering.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Download for iOS</Button>
                <Button variant="outline">Download for Android</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 DishDash. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/terms"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/privacy"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
