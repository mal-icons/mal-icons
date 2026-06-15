import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-social-google",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlSocialGoogle {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M707 360c-70-75-128-87-184-88h-2c-126 0-245 104-245 248 0 151 136 239 244 239h1c60 0 133-11 197-103H472V401l523 2c5 26 14 91 14 125 0 289-194 495-493 495C232 1023 1 797 1 515S232 8 516 8c139 0 288 55 382 180zm-187 93v154h263c-12 65-81 195-263 195-159 0-287-130-287-285 0-156 131-287 287-287 91 0 152 40 185 72l126-119C751 108 646 63 520 63 264 63 56 264 56 517c0 251 208 453 464 453 270 0 445-185 445-442 0-29-2-52-6-75H520z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlSocialGoogle;
