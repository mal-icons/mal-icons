import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-sign-merge-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSignMergeRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.75 6v1q0.210.450.590.95c0.540.72 1.26 1.44 2.02 2.2l-0.710.71-0.01-0.02c-0.65-0.65-1.33-1.33-1.88-2.01V12h-1.5V6H6.03a0.250.25 0 0 1-0.19-0.41l1.97-2.36a0.250.25 0 0 1 0.38 0l1.97 2.36a0.250.25 0 0 1-0.190.41z"}],["path",{"fill-rule":"evenodd","d":"M9.050.44c-0.58-0.58-1.52-0.58-2.1 0L0.44 6.95c-0.580.58-0.58 1.52 0 2.1l6.52 6.52c0.580.58 1.520.58 2.1 0l6.52-6.52c0.58-0.580.58-1.52 0-2.1zm-1.40.7a0.50.5 0 0 1 0.7 0l6.52 6.52a0.50.5 0 0 1 0 0.7L8.35 14.87a0.50.5 0 0 1-0.7 0L1.13 8.35a0.50.5 0 0 1 0-0.7L7.65 1.13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSignMergeRight;
