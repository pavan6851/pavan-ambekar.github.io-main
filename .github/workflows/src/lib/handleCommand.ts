import help from "@/lib/commands/help";
import about from "@/lib/commands/about";
import banner from "@/lib/commands/banner";
import hobbies from "@/lib/commands/hobbies";
import skills from "@/lib/commands/skills";
import hepl from "@/lib/commands/hepl";
import awards from "@/lib/commands/awards";
import social from "@/lib/commands/social";
import projects from "@/lib/commands/projects";

export default function handleCommand(command: string): string[] | { text: string, url: string }[] | null {
    switch (command) {
        case 'help':
            return help()
        case 'hepl':
            return hepl()
        case 'about':
            return about()
        case 'projects':
            return projects()
        case 'banner':
            return banner()
        case 'skills':
            return skills()
        case 'hobbies':
            return hobbies()
        case 'awards':
            return awards()
        case 'social':
            return social()
        case 'clear':
            return null
        default:
            return ['Hmmm, no idea what that does. Type "help" to see a list of available commands']
    }
}
