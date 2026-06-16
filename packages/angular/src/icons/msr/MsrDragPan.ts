import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-drag-pan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDragPan {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-450H198l62 62q9 9 9 22t-9 22q-9 9-22 9t-22-9L101-459q-9-9-9-21t9-21l116-116q9-9 22-9t22 9q9 9 9 22t-9 22l-63 63h252v-252l-62 62q-9 9-22 9t-22-9q-9-9-9-22t9-22l115-115q9-9 21-9t21 9l115 115q9 9 9 22t-9 22q-9 9-22 9t-22-9l-62-62v252h252l-62-62q-9-9-9-22t9-22q9-9 22-9t22 9l115 115q9 9 9 21t-9 21L744-344q-9 9-22 9t-22-9q-9-9-9-22t9-22l62-62H510v252l67-67q9-9 22-9t22 9q9 9 9 22t-9 22L501-101q-9 9-21 9t-21-9L339-221q-9-9-9-22t9-22q9-9 22-9t22 9l67 67v-252Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDragPan;
