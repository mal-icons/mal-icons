import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-turbopack-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevTurbopackIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M300 0 132.2 96l0.3 75.3L300 75.6 496.9 188l65.6 37.5V150zm-29.5 507.5L103 412V188.2l-0.4-75.5L37.5 150v300L205 545.7zM496.9 412V222.1l65.6 37.5V450L300 600l-65.4-37.4 65.4-38.1v-0.1z"}],["path",{"fill":"currentColor","d":"M132.7 222.2v172.6L300 490.4V317.8zM300 109.6l-152.5 87.1L315 292.4l152.4-87.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevTurbopackIcon;
