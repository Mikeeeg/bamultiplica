import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;

public class KeyboardMacro {
    public static void main(String[] args) throws AWTException {
        // Crea un objeto Robot para simular la pulsación de teclas
        Robot robot = new Robot();

        // Define el texto que deseas escribir
        String textoAEscribir = "git init";

        // Espera 3 segundos antes de comenzar a escribir
        robot.delay(3000);

        // Itera sobre cada letra del texto y escribe en el teclado
        for (int i = 0; i < textoAEscribir.length(); i++) {
            // Obtiene el código de tecla para la letra actual
            int keyCode = KeyEvent.getExtendedKeyCodeForChar(textoAEscribir.charAt(i));

            // Simula la pulsación y liberación de la tecla
            robot.keyPress(keyCode);
            robot.keyRelease(keyCode);
        }
    }
}
