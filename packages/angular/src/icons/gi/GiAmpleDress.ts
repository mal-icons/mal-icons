import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-ample-dress",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAmpleDress {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M288 16l32 16s-25.2 44.02-16 64c5 10.8 32 16 32 16-16 32-32 80-32 96 80 48 80 144 160 176 0 64-80 112-208 112S48 448 48 384c80-32 80-128 160-176 0-16-16-64-32-96 0 0 27-5.2 32-16 9.2-19.98-16-64-16-64l32-16c0 32 16 48 32 48s32-16 32-48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAmpleDress;
