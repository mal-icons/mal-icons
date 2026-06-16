import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-pin-invoke",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPinInvoke {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-160v-640h520v60H140v520h680v-300h60v360H80Zm315-152-42-43 145-145H394v-60h206v206h-60v-103L395-312Zm375-268q-45 0-77.5-32.08Q660-644.17 660-690q0-45 32.5-77.5t78-32.5q45.5 0 77.5 32.5t32 78q0 45.5-32.08 77.5-32.08 32-77.92 32Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPinInvoke;
