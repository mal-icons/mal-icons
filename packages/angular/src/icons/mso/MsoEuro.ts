import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-euro",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoEuro {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M600-120q-115 0-212.5-67.5T255-370H120v-60h123q-4-28-3.5-50t3.5-50H120v-60h135q35-115 132.5-182.5T600-840q69 0 129.5 23.5T840-748l-43 42q-41-36-92-55t-105-19q-94 0-171.5 52.5T319-590h281v60H304q-5 27-5 50t5 50h296v60H319q32 85 109.5 137.5T600-180q53 0 104-18t94-56l42 42q-44 42-107 67t-133 25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoEuro;
