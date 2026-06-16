import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-assistant-on-hub",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAssistantOnHub {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M410.18-490q12.83 0 21.33-8.68 8.5-8.68 8.5-21.5 0-12.82-8.68-21.32-8.68-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.68-8.5 21.5 0 12.83 8.68 21.33 8.68 8.5 21.5 8.5Zm-140 0q12.83 0 21.33-8.68 8.5-8.68 8.5-21.5 0-12.82-8.68-21.32-8.68-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.68-8.5 21.5 0 12.83 8.68 21.33 8.68 8.5 21.5 8.5Zm280 0q12.83 0 21.33-8.68 8.5-8.68 8.5-21.5 0-12.82-8.68-21.32-8.68-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.68-8.5 21.5 0 12.83 8.68 21.33 8.68 8.5 21.5 8.5Zm140 0q12.83 0 21.33-8.68 8.5-8.68 8.5-21.5 0-12.82-8.68-21.32-8.68-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.68-8.5 21.5 0 12.83 8.68 21.33 8.68 8.5 21.5 8.5ZM140-300h680v-440H140v440Zm340 140q-99 0-169.5-13.5T240-206v-34H140q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 24-18 42t-42 18H720v34q0 19-70.5 32.5T480-160Zm0-360Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAssistantOnHub;
