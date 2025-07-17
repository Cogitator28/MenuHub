import { ChefHat } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm mt-2">

                {/* Brand Section */}
                <div>
                    <div className="flex space-x-1 items-center font-serif">
                        <ChefHat className="h-8 w-8 text-orange-600" />
                        <h2 className="text-lg font-semibold">MenuHub</h2>
                    </div>
                    <p className="mt-2 text-gray-400">
                        Your all-in-one solution for digital restaurant menus. Manage, customize, and serve with ease.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-medium mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/features" className="hover:text-white">Features</a></li>
                        <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="font-medium mb-2">Connect</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li><a href="https://twitter.com" className="hover:text-white">Twitter</a></li>
                        <li><a href="https://facebook.com" className="hover:text-white">Facebook</a></li>
                        <li><a href="https://instagram.com" className="hover:text-white">Instagram</a></li>
                        <li><a href="https://linkedin.com" className="hover:text-white">LinkedIn</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-medium mb-2">Contact</h3>
                    <p className="text-gray-300">
                        support@menuhub.com <br />
                        +234 806 1651 251 <br />
                        lagos, Nigeria.
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-xs">
                &copy; {new Date().getFullYear()} MenuHub. All rights reserved.
            </div>
        </footer>
    );
}
