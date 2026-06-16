import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-deployed-code",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDeployedCode {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-154v-309L180-619v309l270 156Zm60 0 270-156v-310L510-463.16V-154Zm-30-360 266-155-266-154-267 154 267 155ZM150-258q-14.25-8.43-22.12-22.21T120-310v-340q0-16 7.88-29.79Q135.75-693.57 150-702l300-173q14.33-8 30.16-8Q496-883 510-875l300 173q14.25 8.43 22.13 22.21T840-650v340q0 16-7.87 29.79Q824.25-266.43 810-258L510-85q-14.33 8-30.16 8Q464-77 450-85L150-258Zm330-222Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDeployedCode;
