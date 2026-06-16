import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-wifi-lock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWifiLock {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M682-120q-17 0-28.5-11.38T642-159.6v-118.8q0-16.83 11.5-28.21Q665-318 682-318h1v-39q0-33.83 24.12-57.91 24.12-24.09 58-24.09Q799-439 823-414.91q24 24.09 24 57.91v39h1q17 0 28.5 11.39T888-278.4v118.8q0 16.83-11.5 28.22Q865-120 848-120H682Zm41-198h84v-39q0-19-11.5-30.5T765-399q-19 0-30.5 11.5T723-357v39ZM480-120 0-600q99-94 221-147t259-53q137 0 259 53t221 147L844-484q-16-6-32.65-10.09Q794.71-498.18 777-499l95-95q-87-68-184.5-107T480-740q-110 0-207.5 39T88-594l392 392 66-66q0.73 18.06 4.36 35.03Q554-216 560-200l-80 80Zm0-351Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWifiLock;
