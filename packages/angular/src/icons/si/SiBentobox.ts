import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bentobox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBentobox {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m7.41 3.82 2.72-2.72a3.74 3.74 0 0 1 5.29 0l0.080.08a3.74 3.74 0 0 1 0 5.29l-2.72 2.72-5.37-5.37Zm7.41 7.41 2.72-2.72a3.74 3.74 0 0 1 5.29 0l0.080.08a3.74 3.74 0 0 1 0 5.29l-2.72 2.72-5.37-5.37h0ZM0 11.23l2.72-2.72a3.74 3.74 0 0 1 5.29 0l0.080.08a3.74 3.74 0 0 1 0 5.29l-2.72 2.72L0 11.23Zm7.41 7.41 2.72-2.72a3.74 3.74 0 0 1 5.29 0l0.080.08a3.74 3.74 0 0 1 0 5.29L12.77 24l-5.37-5.37Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBentobox;
