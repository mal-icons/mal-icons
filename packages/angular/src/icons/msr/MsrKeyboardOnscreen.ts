import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-keyboard-onscreen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrKeyboardOnscreen {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M330-285h300q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T630-345H330q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T330-285ZM203-410h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60ZM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-435h680v-145H140v145Zm0 375h680v-315H140v315Zm0 0v-315 315Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrKeyboardOnscreen;
