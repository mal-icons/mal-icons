import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-emergency",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrEmergency {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M456-136q-13 0-21.5-8.5T426-166v-221L235-276q-11 6-23 3t-18-14l-24-41q-7-11-3.5-23t14.5-18l189-111-189-109q-11-6-14.5-18t3.5-23l24-41q6-11 18-14t23 3l191 109v-221q0-13 8.5-21.5T456-824h48q13 0 21.5 8.5T534-794v221l191-109q11-6 23-3t18 14l24 41q7 11 3.5 23T779-589L590-480l189 111q11 6 14.5 18t-3.5 23l-24 41q-6 11-18 14t-23-3L534-387v221q0 13-8.5 21.5T504-136h-48Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrEmergency;
