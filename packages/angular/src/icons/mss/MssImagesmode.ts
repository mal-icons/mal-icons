import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-imagesmode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssImagesmode {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M236-277h489L578-473 446-302l-93-127-117 152ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Zm160.12-390Q361-570 375.5-584.62q14.5-14.62 14.5-35.5Q390-641 375.38-655.5q-14.62-14.5-35.5-14.5Q319-670 304.5-655.38q-14.5 14.62-14.5 35.5Q290-599 304.62-584.5q14.62 14.5 35.5 14.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssImagesmode;
