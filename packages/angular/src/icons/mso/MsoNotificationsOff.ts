import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-notifications-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoNotificationsOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-200v-60h84v-315q0-29.6 8.5-58.3T276-688l45 45q-8 17-12.5 33.5T304-575v315h316L75-805l42-42 726 727-42 42-122-122H160Zm557-132-60-60v-174q0-75-50.5-126.5T482-744q-35 0-67 11.5T356-693l-43-43q27-26 54.5-40.5T424-798v-26.09q0-23.29 16.27-39.6Q456.53-880 479.77-880 503-880 519.5-863.69t16.5 39.6V-798q78 17 129.5 82T717-566v234Zm-255-86Zm18 338q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm27-463Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoNotificationsOff;
