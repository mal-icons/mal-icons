import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-view-carousel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrViewCarousel {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M110-285q-12.75 0-21.37-8.62T80-315v-330q0-12.75 8.63-21.37T110-675h80q12.75 0 21.38 8.63T220-645v330q0 12.75-8.62 21.38T190-285h-80Zm200 85q-12.75 0-21.37-8.62T280-230v-500q0-12.75 8.63-21.37T310-760h340q12.75 0 21.38 8.63T680-730v500q0 12.75-8.62 21.38T650-200H310Zm30-500v440-440Zm430 415q-12.75 0-21.37-8.62T740-315v-330q0-12.75 8.63-21.37T770-675h80q12.75 0 21.38 8.63T880-645v330q0 12.75-8.62 21.38T850-285h-80ZM340-700v440h280v-440H340Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrViewCarousel;
