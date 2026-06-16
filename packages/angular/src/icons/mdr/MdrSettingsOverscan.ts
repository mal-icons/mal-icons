import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-settings-overscan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSettingsOverscan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.01 7 10 9h4l-1.99-2zM17 10v4l2-1.99L17 10zM7 10l-2 2.01L7 14v-4zm7 5h-4l2.01 2L14 15zm6-11H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 14.01H4V5.99h16v12.02z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSettingsOverscan;
