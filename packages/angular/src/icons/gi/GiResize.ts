import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-resize",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiResize {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M29 30l1 90h36V66h26V30H29zm99 0v36h72V30h-72zm108 0v36h72V30h-72zm108 0v36h72V30h-72zm102 0v78h36V30h-36zm-206 80v36h100.54l-118 118H30v218h218V289.46l118-118V272h36V110H240zm206 34v72h36v-72h-36zM30 156v72h36v-72H30zm416 96v72h36v-72h-36zm0 108v72h36v-72h-36zm-166 86v36h72v-36h-72zm108 0v36h72v-36h-72z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiResize;
