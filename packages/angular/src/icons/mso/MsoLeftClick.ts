import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-left-click",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoLeftClick {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M468-240q-96-5-162-74t-66-166q0-100 70-170t170-70q97 0 166 66t74 163l-63-20q-11-64-60-106.5T480-660q-75 0-127.5 52.5T300-480q0 67 42.5 116.5T449-303l19 63ZM821-60 650-231 600-80 480-480l400 120-151 50 171 171-79 79Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoLeftClick;
