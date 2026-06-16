import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-fast-rewind",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFastRewind {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M807-273 544-455q-13-9-13-25t13-25l263-182q15-11 31-2.5t16 26.5v366q0 18-16 26.5t-31-2.5Zm-402 0L142-455q-13-9-13-25t13-25l263-182q15-11 31-2.5t16 26.5v366q0 18-16 26.5t-31-2.5Zm-13-207Zm402 0ZM392-355v-250L211-480l181 125Zm402 0v-250L613-480l181 125Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFastRewind;
