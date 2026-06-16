import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-local-convenience-store",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLocalConvenienceStore {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M333-235h83.64q8.36 0 13.86-5.7T436-254q0-7.6-5.7-13.3-5.7-5.7-13.3-5.7h-61v-46h65q6 0 10.5-4.5T436-334v-88q0-6-4.5-10.5T421-437h-83.64q-8.36 0-13.86 5.7T318-418q0 7.6 5.7 13.3 5.7 5.7 13.3 5.7h61v42h-65q-6 0-10.5 4.5T318-342v92q0 6 4.5 10.5T333-235Zm290 0q7.6 0 13.3-5.7 5.7-5.7 5.7-13.3v-163.81q0-8.19-5.7-13.69T623-437q-7.6 0-13.3 5.7-5.7 5.7-5.7 13.3v61h-42v-60.88q0-8.12-5.7-13.62T543-437q-7.6 0-13.3 5.7-5.7 5.7-5.7 13.3v84q0 6 4.5 10.5T539-319h65v65q0 7.6 5.7 13.3 5.7 5.7 13.3 5.7ZM179-120q-24 0-42-18t-18-42v-339q-28-24-37-59t2-70l43-135q8-27 27.9-42T201-840h553q28.21 0 49.1 15.5Q824-809 832-783l44 135q11 35 1.5 70T840-518.52V-180q0 24-18 42t-42 18H179Zm391-430q29 0 49-19t16-46l-25-165H510v165q0 26.25 17 45.63T570-550Zm-187 0q28 0 47.5-19t19.5-46v-165H350l-25 165q-4 26 14 45.5t44 19.5Zm-182 0q23.6 0 41.3-16.5Q260-583 263-607l26-173H189l-46 146q-10 31 8 57.5t50 26.5Zm557 0q32 0 50.5-26t8.5-58l-46-146H671l26 173q3 24 20.4 40.5T758-550ZM179-180h601v-311q1 1-6.5 1H758q-25 0-47.5-10.5T666-533q-16 20-40 31.5T573.06-490Q543-490 521.5-498.5 500-507 480-527q-15 18-38 27.5t-52 9.5q-31 0-55-11t-41-32q-24 21-47 32t-46 11h-13.5q-6.5 0-8.5-1v311Zm601 0H179h601Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLocalConvenienceStore;
