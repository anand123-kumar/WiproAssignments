package com.mavenprograms;
/*
 * | Feature                      | **Maven Project**                                        | **Normal Java Project**                                  |
| ---------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| 📦 **Build Tool**            | Uses **Apache Maven** as a build and dependency manager  | No build tool or manual compilation                      |
| 📁 **Project Structure**     | Follows **standard directory layout** (`src/main/java`)  | No standard structure; varies by developer               |
| 📚 **Dependency Management** | Automatic via `pom.xml` (downloads from Maven Central)   | Manual — you have to download and add `.jar` files       |
| 🔧 **Build Automation**      | Automated with `mvn compile`, `mvn test`, `mvn package`  | Manual or IDE-dependent (Eclipse/IntelliJ build)         |
| 📄 **Configuration**         | Uses `pom.xml` to configure project, plugins, versions   | No central config file — everything is hard-coded        |
| 🔁 **Reusability**           | Easy to share and reuse as a library/JAR via Maven       | Harder to reuse without packaging manually               |
| 🤝 **Team Collaboration**    | Easy: Just share code + `pom.xml`, others can build fast | Hard: Requires sharing `.jar` files and setting paths    |
| 🧪 **Testing Support**       | Built-in with JUnit/TestNG via plugins                   | Needs manual setup for test libraries                    |
| 🧰 **IDE Support**           | Supported by IntelliJ, Eclipse, VS Code (auto-import)    | Supported but often needs manual classpath configuration |
| 🚀 **Integration**           | Easily integrates with CI/CD (Jenkins, GitHub Actions)   | Requires custom scripting or manual steps                |


 */
public class Sample {

	public static void main(String[] args) {
	System.out.println("Hello Maven!!!!!!!!!!");
	}

}
