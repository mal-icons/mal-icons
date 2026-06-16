import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-square-foot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSquareFoot {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200-120q-33 0-56.5-23.5T120-200v-539q0-37 34.5-51t61.5 13l45 45-42 42 27 27 42-42 117 117-42 42 27 27 42-42 118 118-42 42 27 27 42-42 117 117-42 42 27 27 42-42 45 45q30 30 15 68.5T726-120H200Zm0-80h463L200-663v463Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSquareFoot;
