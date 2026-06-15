import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-tag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfTag {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.95 1.01l-3.97 2.88v12.14l3.99-2.79 4.04 2.79v-12.13l-4.06-2.88zM12.01 14.12l-3.04-2.1-2.98 2.09v-9.71l2.98-2.16 3.05 2.17v9.71zM7.25 6c0 0.97 0.79 1.75 1.75 1.75s1.75-0.78 1.75-1.75-0.78-1.75-1.75-1.75-1.75 0.79-1.75 1.75zM9 5.25c0.41 0 0.75 0.34 0.75 0.75s-0.34 0.75-0.75 0.75-0.75-0.34-0.75-0.75 0.34-0.75 0.75-0.75z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfTag;
