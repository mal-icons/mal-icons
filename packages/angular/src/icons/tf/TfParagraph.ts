import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-paragraph",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfParagraph {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 1.03h-11.01c-2.18 0-3.95 1.77-3.95 3.96s1.77 3.95 3.96 3.95h3.01v7.07h1v-13.97h2.02v13.97h1v-13.97h3.99v-1zM8 7.94h-3.01c-1.63 0-2.95-1.32-2.95-2.95 0-1.63 1.33-2.95 2.96-2.95h3.01v5.91z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfParagraph;
