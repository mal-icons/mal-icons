import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-plagiarism",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtPlagiarism {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 4H6v16h12V9h-5V4zm0.97 7.03a3.48 3.48 0 0 1 0.59 4.13l1.88 1.88-1.41 1.41-1.88-1.88c-1.330.71-3.010.53-4.13-0.59a3.5 3.5 0 0 1 0-4.95 3.5 3.5 0 0 1 4.95 0z","opacity":".3"}],["circle",{"cx":"11.5","cy":"13.5","r":"1.5","opacity":".3"}],["path",{"d":"M14 2H6c-1.1 0-2 0.9-2 2v16c0 1.10.89 2 1.99 2H18c1.1 0 2-0.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"}],["path",{"d":"M9.03 11.03a3.5 3.5 0 0 0 0 4.95 3.48 3.48 0 0 0 4.130.59l1.88 1.88 1.41-1.41-1.88-1.88c0.71-1.330.53-3.01-0.59-4.13a3.5 3.5 0 0 0-4.95 0zm3.53 3.53c-0.590.59-1.540.59-2.12 0a1.49 1.49 0 0 1 0-2.12 1.49 1.49 0 0 1 2.12 0c0.590.590.59 1.53 0 2.12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtPlagiarism;
