import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-flare",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFlare {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-450v-60h232v60H40Zm271-157-80-80 42-42 80 80-42 42Zm139-81v-232h60v232h-60Zm199 81-42-42 80-80 42 42-80 80Zm39 157v-60h232v60H688Zm-208 72q-42.5 0-72.25-29.75T378-480q0-42.5 29.75-72.25T480-582q42.5 0 72.25 29.75T582-480q0 42.5-29.75 72.25T480-378Zm212 152-85-85 42-42 85 85-42 42Zm-424 0-42-42 85-85 42 42-85 85ZM450-40v-232h60v232h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFlare;
