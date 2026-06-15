import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-save",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfSave {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.16 0h-12.66c-0.83 0-1.5 0.67-1.5 1.5v14c0 0.83 0.67 1.5 1.5 1.5h14c0.83 0 1.5-0.67 1.5-1.5v-12.72l-2.84-2.78zM8 1v4h3v-4h1v5h-8v-5h4zM3 16v-6h11v6h-11zM16 15.5c0 0.28-0.22 0.5-0.5 0.5h-0.5v-7h-13v7h-0.5c-0.28 0-0.5-0.22-0.5-0.5v-14c0-0.28 0.22-0.5 0.5-0.5h1.5v6h10v-6h0.76l2.24 2.2v12.3z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfSave;
