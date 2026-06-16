import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-all-inclusive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAllInclusive {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M212-260q-90 0-151-65.5T0-482q0-90 61.5-154T212-700q36 0 69.5 12t59.5 37l93 90-42 42-89-87q-18-18-41.5-26t-49.5-8q-64 0-108 46.5T60-482q0 66 43.5 114T212-320q25 0 48.5-8t42.5-25l316-298q26-25 59.5-37t68.5-12q90 0 151.5 64T960-482q0 91-61.5 156.5T747-260q-35 0-69-11.5T619-308l-91-90 42-42 87 87q17 17 41 25t49 8q65 0 109-48t44-114q0-65-44.5-111.5T747-640q-25 0-48.5 9T657-605L341-307q-26 24-60 35.5T212-260Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAllInclusive;
