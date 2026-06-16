import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-subdirectory-arrow-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSubdirectoryArrowLeft {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M373-142 181-336q-5-5-7-10.13-2-5.13-2-11Q172-363 174-368q2-5 7-10l191-191q8-8 21.12-8.5 13.12-0.5 21.61 8.75 9.26 8.25 9.26 21T415-526L274-385h426v-385q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T760-770v415q0 12.75-8.62 21.38T730-325H275l141 141q8 8 8.5 20.830.5 12.83-8.5 22.17-9 9-21.5 8.5T373-142Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSubdirectoryArrowLeft;
