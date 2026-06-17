import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-file-image-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFileImageFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 0h8a2 2 0 0 1 2 2v8.29l-2.73-2.73a1 1 0 0 0-1.520.13l-1.89 2.64-1.77-1.06a1 1 0 0 0-1.220.15L2 12.29V2a2 2 0 0 1 2-2m4 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"}],["path",{"d":"M10.56 8.27 14 11.71V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-0.29l3.58-3.58 2.56 1.54 2.43-3.39z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFileImageFill;
