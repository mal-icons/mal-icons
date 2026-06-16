import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-select-to-speak",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSelectToSpeak {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M780-481q0-93-52.5-168.5T590-759q-12-5-17-15.87T573-797q6-12 18.5-16.5t25.50.5q100 41 161.5 130.5T840-481q0 112-61.5 201.5T617-149q-13 5-25.50.5T573-165q-5-11.25 0-22.12T590-203q85-34 137.5-109.5T780-481ZM280-360H150q-12.75 0-21.37-8.62T120-390v-180q0-12.75 8.63-21.37T150-600h130l149-149q14-14 32.5-6.34T480-728v496q0 19.69-18.5 27.34Q443-197 429-211L280-360Zm380-119.94q0 45.94-21.5 85.44T580-331q-7 3-23.5 9T540-336v-289q0-20 17-14t24 9q37 24 58 63.5t21 86.56ZM420-311v-337L307-540H180v120h127l113 109ZM69.83-688Q57-688 48.5-696.62T40-718v-142q0-24.75 17.63-42.37T100-920h142q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T242-860H100v142q0 12.75-8.68 21.38Q82.65-688 69.83-688ZM718-40q-12.75 0-21.37-8.68Q688-57.35 688-70.17 688-83 696.63-91.5T718-100h142v-142q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T920-242v142q0 24.75-17.62 42.38T860-40H718ZM300-480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSelectToSpeak;
