import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-remember-me",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssRememberMe {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200-40v-880h560v880H200Zm60-60h440v-30H260v30Zm0-730h440v-30H260v30Zm220 530q-59.54 0-115.77 18Q308-264 260-235v45h440v-45q-48-29-104.23-47Q539.54-300 480-300Zm0-60q60 0 115.5 15.5T700-302v-468H260v468q50-27 105-42.5T480-360Zm0.77-63Q529-423 563-456.76q34-33.76 34-82Q597-587 563.24-621q-33.76-34-82-34Q433-655 399-621.23q-34 33.76-34 82Q365-491 398.77-457q33.76 34 82 34Zm0.24-60q-23 0-39.5-16.5T425-539q0-23 16.5-39.5T481-595q23 0 39.5 16.5T537-539q0 23-16.5 39.5T481-483Zm-1 293h220-440 220Zm1-349Zm-1-291Zm0 700Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssRememberMe;
