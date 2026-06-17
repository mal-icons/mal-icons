import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-easel3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEasel3 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8.5 13.13V12h5a1.5 1.5 0 0 0 1.5-1.5V2h0.5a0.50.5 0 0 0 0-1H0.5a0.50.5 0 0 0 0 1H1v8.5A1.5 1.5 0 0 0 2.5 12h5v1.13a1 1 0 1 0 1 0M2 2v8.5a0.50.5 0 0 0 0.50.5h11a0.50.5 0 0 0 0.5-0.5V2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEasel3;
