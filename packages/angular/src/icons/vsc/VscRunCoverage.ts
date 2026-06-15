import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-run-coverage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscRunCoverage {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.5 7C6.99 7 9 9.02 9 11.5C9 13.99 6.99 16 4.5 16C2.02 16 0 13.99 0 11.5C0 9.02 2.02 7 4.5 7ZM6.85 10.15C6.66 9.95 6.34 9.95 6.15 10.15L4 12.29L2.85 11.15C2.66 10.95 2.34 10.95 2.15 11.15C1.95 11.34 1.95 11.66 2.15 11.85L3.65 13.35C3.84 13.55 4.16 13.55 4.35 13.35L6.85 10.85C7.05 10.66 7.05 10.34 6.85 10.15Z"}],["path",{"d":"M4.5 2C4.76 2 5.01 2.07 5.23 2.19L13.23 6.69C13.71 6.96 14 7.46 14 8C14 8.54 13.71 9.04 13.23 9.31L9.98 11.14C9.96 10.78 9.9 10.43 9.81 10.09L12.74 8.44C12.9 8.35 13 8.18 13 8C13 7.82 12.9 7.65 12.75 7.56L4.74 3.06C4.67 3.02 4.59 3 4.5 3C4.22 3 4 3.23 4 3.5V6.03C3.66 6.06 3.32 6.12 3 6.21V3.5C3 2.67 3.67 2 4.5 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscRunCoverage;
