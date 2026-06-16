import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-align-justify-flex-end",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAlignJustifyFlexEnd {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M849.83-80Q837-80 828.5-88.62T820-110v-740q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T880-850v740q0 12.75-8.68 21.38Q862.65-80 849.83-80ZM600-290q-12.75 0-21.37-8.62T570-320v-320q0-12.75 8.63-21.37T600-670h40q12.75 0 21.38 8.63T670-640v320q0 12.75-8.62 21.38T640-290h-40Zm-240 0q-12.75 0-21.37-8.62T330-320v-320q0-12.75 8.63-21.37T360-670h40q12.75 0 21.38 8.63T430-640v320q0 12.75-8.62 21.38T400-290h-40Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAlignJustifyFlexEnd;
