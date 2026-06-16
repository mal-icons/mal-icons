import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-wb-shade",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWbShade {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M785-167 547-405q-9-9-9-22t9-22q9-9 22-9t22 9l238 238q9 9 9 22t-9 22q-9 9-22 9t-22-9Zm-215 7q-13 0-21.5-8.5T540-190v-147l177 177H570Zm-400 0q-13 0-21.5-8.5T140-190v-380h-24q-10 0-13.5-9.5T106-596l193-193q1-1 11-5 2 0 11 5l193 193q7 7 3.5 16.5T504-570h-24v380q0 13-8.5 21.5T450-160H170Zm100-255h80v-155h-80v155Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWbShade;
