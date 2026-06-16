import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-keyboard-tab-rtl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrKeyboardTabRtl {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m354-450 148 148q9 9 8.5 21t-9.5 21q-9 9-21 9t-21-9L260-459q-9-9-9-21t9-21l199-199q9-9 21-9t21 9q9 9 9 21t-9 21L354-510h496q13 0 21.5 8.5T880-480q0 13-8.5 21.5T850-450H354ZM110-240q-13 0-21.5-8.5T80-270v-420q0-13 8.5-21.5T110-720q13 0 21.5 8.5T140-690v420q0 13-8.5 21.5T110-240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrKeyboardTabRtl;
