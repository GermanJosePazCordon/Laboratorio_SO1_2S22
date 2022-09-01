package main

import (
	"fmt"
	"os/exec"
)

func main() {
	fmt.Println("DATOS OBTENIDOS DESDE EL MODULO :")
	fmt.Println("")

	cmd := exec.Command("sh", "-c", "cat /proc/ejemplo_modulo")
	out, err := cmd.CombinedOutput()
	if err != nil {
		fmt.Println(err)
	}
	output := string(out[:])
	fmt.Println(output)
}
