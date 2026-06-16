import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-feature-search",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFeatureSearch {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m727-441 60 60v241q0 24-18 42t-42 18H137q-24 0-42-18t-18-42v-590q0-24 18-42t42-18h266q-6 15-9.6 29.88-3.6 14.88-5.4 30.12H137v590h590v-301Zm37-165 132 132-43 43-133-133q-21 16-46.5 24t-52.5 8q-72.5 0-123.25-50.75T447-706q0-72.5 50.75-123.25T621-880q72.5 0 123.25 50.75T795-706q0 26-8 52t-23 48Zm-142.91 14Q669-592 702-625.08q33-33.08 33-81Q735-754 701.92-787q-33.08-33-81-33Q573-820 540-786.92q-33 33.09-33 81Q507-658 540.08-625q33.09 33 81 33ZM137-441v301-590 258-8 39Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFeatureSearch;
