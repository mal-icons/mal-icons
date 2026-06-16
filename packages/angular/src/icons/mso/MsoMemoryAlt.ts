import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-memory-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoMemoryAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M250-370h60v-220h-60v220Zm200 0h60v-220h-60v220Zm200 0h60v-220h-60v220ZM140-260h680v-440H140v440Zm0 0v-440 440Zm70 140v-80h-70q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h70v-80h60v80h180v-80h60v80h180v-80h60v80h70q24 0 42 18t18 42v440q0 24-18 42t-42 18h-70v80h-60v-80H510v80h-60v-80H270v80h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoMemoryAlt;
