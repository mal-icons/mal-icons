import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-keyboard-hide",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssKeyboardHide {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-40 333-188h295L480-40ZM80-280v-560h800v560H80Zm60-60h680v-440H140v440Zm184-65h313v-60H324v60ZM197-530h60v-60h-60v60Zm127 0h60v-60h-60v60Zm126 0h60v-60h-60v60Zm127 0h60v-60h-60v60Zm126 0h60v-60h-60v60ZM197-655h60v-60h-60v60Zm127 0h60v-60h-60v60Zm126 0h60v-60h-60v60Zm127 0h60v-60h-60v60Zm126 0h60v-60h-60v60ZM140-340v-440 440Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssKeyboardHide;
