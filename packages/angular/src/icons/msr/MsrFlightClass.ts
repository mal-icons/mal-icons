import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-flight-class",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFlightClass {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M550-440q-28.87 0-49.44-20.56Q480-481.12 480-510v-220q0-28.87 20.56-49.44Q521.13-800 550-800h100q28.88 0 49.44 20.56Q720-758.87 720-730v220q0 28.88-20.56 49.44Q678.88-440 650-440H550Zm-10-60h120v-240H540v240ZM372-240q-23 0-42-13.5T305-290L202.06-634.81Q200-640 200-643.5V-770q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T260-770v133l105 337h325q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T690-240H372Zm-22 120q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T350-180h340q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T690-120H350Zm190-620h120-120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFlightClass;
