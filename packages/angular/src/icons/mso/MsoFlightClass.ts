import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-flight-class",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFlightClass {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M550-440q-28.87 0-49.44-20.56Q480-481.12 480-510v-220q0-28.87 20.56-49.44Q521.13-800 550-800h100q28.88 0 49.44 20.56Q720-758.87 720-730v220q0 28.88-20.56 49.44Q678.88-440 650-440H550Zm-10-60h120v-240H540v240ZM372-240q-23 0-42-13.5T305-290L200-643v-157h60v163l104.55 337H720v60H372Zm-52 120v-60h400v60H320Zm220-620h120-120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFlightClass;
