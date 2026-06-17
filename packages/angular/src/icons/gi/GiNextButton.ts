import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-next-button",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiNextButton {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M84.41 106c-15.630.1-27.67 13.8-25.69 29.3 16 124 16 117.4 0 241.4-2.54 19.8 17.33 35 35.79 27.3L361.5 292.9v98.8c0 7.9 8.9 14.2 20 14.3h52c11.1-0.1 20-6.4 20-14.3V120.2c-0.1-7.8-9-14.1-20-14.2h-52c-11 0.1-19.9 6.4-20 14.2v98.9L94.51 108c-3.2-1.3-6.63-2-10.1-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiNextButton;
