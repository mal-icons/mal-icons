import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-keyboard-keys",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoKeyboardKeys {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M287-285v-60h387v60H287ZM123-450v-60h60v60h-60Zm164 0v-60h60v60h-60Zm163 0v-60h60v60h-60Zm164 0v-60h60v60h-60Zm163 0v-60h60v60h-60ZM123-615v-60h60v60h-60Zm164 0v-60h60v60h-60Zm163 0v-60h60v60h-60Zm164 0v-60h60v60h-60Zm163 0v-60h60v60h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoKeyboardKeys;
