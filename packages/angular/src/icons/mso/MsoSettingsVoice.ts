import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-settings-voice",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSettingsVoice {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M313.83 0Q301 0 292.5-8.68q-8.5-8.68-8.5-21.5Q284-43 292.68-51.5q8.68-8.5 21.5-8.5Q327-60 335.5-51.32q8.5 8.68 8.5 21.5Q344-17 335.33-8.5q-8.68 8.5-21.5 8.5ZM480 0q-12.32 0-20.66-9Q451-18 451-30t8.47-21q8.47-9 21-9Q493-60 502-51.32q9 8.68 9 21.5Q511-17 502.09-8.5 493.18 0 480 0Zm166.83 0Q634 0 625.5-8.68q-8.5-8.68-8.5-21.5Q617-43 625.67-51.5q8.68-8.5 21.5-8.5Q660-60 668.5-51.32q8.5 8.68 8.5 21.5Q677-17 668.33-8.5q-8.68 8.5-21.5 8.5ZM480-423q-43 0-72-30.92-29-30.92-29-75.08v-251q0-41.67 29.44-70.83Q437.88-880 479.94-880t71.56 29.17Q581-821.67 581-780v251q0 44.17-29 75.08Q523-423 480-423Zm0-228Zm-30 531v-136q-106-11-178-89t-72-184h60q0 91 64.29 153t155.5 62Q571-314 635.5-376 700-438 700-529h60q0 106-72 184t-178 89v136h-60Zm30-363q18 0 29.5-13.5T521-529v-251q0-17-11.79-28.5Q497.43-820 480-820q-17.42 0-29.21 11.5Q439-797 439-780v251q0 19 11.5 32.5T480-483Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSettingsVoice;
