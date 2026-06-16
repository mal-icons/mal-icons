import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-phishing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPhishing {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M440-120q-100 0-170-70t-70-170v-180q0-10 9.5-13.5T226-550l129 129q9 9 9 21t-9 21q-9 9-21 9t-21-9l-53-52v71q0 75 53 127.5T440-180q75 0 127.5-52.5T620-360v-134q-35-11-57.5-40.5T540-600q0-36 22.5-65.5T620-706v-144q0-13 8.5-21.5T650-880q13 0 21.5 8.5T680-850v144q35 11 57.5 40.5T760-600q0 36-22.5 66T680-494v134q0 100-70 170t-170 70Zm210-430q21 0 35.5-15t14.5-35q0-21-14.5-35.5T650-650q-20 0-35 14.5T600-600q0 20 15 35t35 15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPhishing;
